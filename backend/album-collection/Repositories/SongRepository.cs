using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using album_collection.Models;
using album_collection.Context;

namespace album_collection.Repositories
{
        public class SongRepository : Repository<Song>, IRepository<Song>
        {
            public SongRepository(AlbumCollectionAPIcontext context) : base(context)
            {
            }
        }

}
