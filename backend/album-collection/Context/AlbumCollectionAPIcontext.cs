using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using album_collection.Models;

namespace album_collection.Context
{
    public class AlbumCollectionAPIcontext : DbContext
    {
        public DbSet<Artist> Artists { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=AlbumCollection_Database;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Artist>().HasData(

                new Artist(1, "The Doors", "image",55, "Alexandria"),
                new Artist(2, "Bon Jovi", "image",58, "New Jersey"),
                new Artist(3, "Sonic Youth", "image",39, "Coral Gables"),
                new Artist(4, "Led Zeppelin", "image", 71, "London"),
                new Artist(5, "Guns n' Roses", "image", 68, "LA") 
                );
        }
    }
}
