using album_collection.Context;
using album_collection.Models;
using album_collection.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace album_collection.Tests
{
    public class ArtistRepositoryTests : IDisposable
    {
        private AlbumCollectionAPIcontext db;
        private ArtistRepository underTest;

        public ArtistRepositoryTests()
        {
            db = new AlbumCollectionAPIcontext();
            db.Database.BeginTransaction();
            underTest = new ArtistRepository(db);
        }

        public void Dispose()
        {
            db.Database.RollbackTransaction();
        }

        [Fact]
        public void Create_Increses_Count_Of_Artists()
        {
            var currentCount = db.Artists.Count();

            underTest.Create(new Artist()
            {
                Name = "Random Name",
                ImageName = "Random Image",
                Age = 4,
                HomeTown = "Random Town"

            });

            var endCount = db.Artists.Count();

            Assert.Equal(currentCount + 1, endCount);
        }

        [Fact]
        public void Delete_Decreses_Count_Of_Artists()
        {
            var currentCount = db.Artists.Count();

            //underTest.Delete(db.Artists[1]);

            var endCount = db.Artists.Count();

            Assert.Equal(currentCount - 1, endCount);
        }

        [Fact]
        public void Update_Changes_Artist_Name()
        {

        }
    }
}
