﻿using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationExtensions(this IServiceCollection services, IConfiguration config)
    {
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
        });
        services.AddDbContext<DataContext>(opts =>
        {
            opts.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
            });
        });
        services.AddMediatR(typeof(List.Query).Assembly);
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);
        return services;
    }
}