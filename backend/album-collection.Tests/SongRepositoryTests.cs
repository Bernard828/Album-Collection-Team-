using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using album_collection.Context;
using album_collection.Models;
using album_collection.Repositories;
using System.Linq;

namespace album_collection.Tests
{
    public class SongRepositoryTests : IDisposable
    {
        private AlbumCollectionAPIcontext db;
        private SongRepository underTest;

        public SongRepositoryTests()
        {
            db = new AlbumCollectionAPIcontext();
            db.Database.BeginTransaction();
            underTest = new SongRepository(db);
        }
        public void Dispose()
        {
            db.Database.RollbackTransaction();
        }

        [Fact]
        public void Create_Increses_Count_Of_Songs()
        {
            var currentCount = db.Songs.Count();

            underTest.Create(new Song()
            {
                Title = "This is the End",
                Duration = "2:30",
                AlbumId = 2
            });

            var endCount = db.Songs.Count();

            Assert.Equal(currentCount + 1, endCount);
        }
    }
}
