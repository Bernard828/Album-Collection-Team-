﻿using album_collection.Context;
using album_collection.Models;
using album_collection.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace album_collection.Tests
{
    public class AlbumRepositoryTests : IDisposable
    {
        private AlbumCollectionAPIcontext db;
        private AlbumRepository underTest;

        public AlbumRepositoryTests()
        {
            db = new AlbumCollectionAPIcontext();
            //db.Database.BeginTransaction();
            underTest = new AlbumRepository(db);
        }

        public void Dispose()
        {
            //db.Database.RollbackTransaction();
        }

        [Fact]
        public void Create_Increses_Count_Of_Albums()
        {
            var currentCount = db.Albums.Count();

            underTest.Create(new Album()
            {
                Name = "Random Name",
                ImageName = "Random Image",
                ReleaseYear = 4,
                RecordLabel = "Random Label",
                Genre = "Random Genre",

            });

            var endCount = db.Albums.Count();

            Assert.Equal(currentCount + 1, endCount);
        }

        [Fact]
        public void Delete_Decreses_Count_Of_Albums()
        {
            var currentCount = db.Albums.Count();

            var someAlbum = underTest.GetById(1);
            underTest.Delete(someAlbum);
            
            var endCount = db.Albums.Count();

            Assert.Equal(currentCount - 1, endCount);
        }

        [Fact]
        public void Update_Changes_Album_Name()
        {

        }
    }
}
