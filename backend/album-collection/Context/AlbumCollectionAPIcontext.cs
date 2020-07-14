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

                new Artist { Id = 1, Name = "The Doors", ImageName = "image", Age = 55, HomeTown = "Alexandria" },
                new Artist { Id = 2, Name = "Bon Jovi", ImageName = "image", Age = 58, HomeTown = "New Jersey" },
                new Artist { Id = 3, Name = "Sonic Youth", ImageName = "image", Age = 39, HomeTown = "Coral Gables" },
                new Artist { Id = 4, Name = "Led Zeppelin", ImageName = "image", Age = 71, HomeTown = "London" },
                new Artist { Id = 5, Name = "Guns n' Roses", ImageName = "image", Age = 68, HomeTown = "LA" }
                );
            modelbuilder.Entity<Album>().HasData(
                new Album { Id = 1, Name = "Morrison Hotel", ImageName = "image", ReleaseYear = 1970, RecordLabel = "Elektra Records", Genre = "Rock", ArtistId = 1 },
                new Album { Id = 2, Name = "Keep the Faith", ImageName = "image", ReleaseYear = 1992, RecordLabel = "Mercury Records", Genre = "Rock", ArtistId = 2 },
                new Album { Id = 3, Name = "Goo", ImageName = "image", ReleaseYear = 1990, RecordLabel = "GDC Records", Genre = "Rock", ArtistId = 3 },
                new Album { Id = 4, Name = "Led Zeppelin IV", ImageName = "image", ReleaseYear = 1972, RecordLabel = "Atlantic", Genre = "Rock", ArtistId = 4 },
                 new Album { Id = 5, Name = "Use Your Illusion I", ImageName = "image", ReleaseYear = 1991, RecordLabel = "Atlantic", Genre = "Rock", ArtistId = 5 },
                 new Album { Id = 6, Name = "Use Your Illusion II", ImageName = "image", ReleaseYear = 1991, RecordLabel = "Atlantic", Genre = "Rock", ArtistId = 5 }

               );

        }
    }
}
