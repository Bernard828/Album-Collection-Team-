using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using album_collection.Models;
using album_collection.Context;

namespace album_collection.Repositories
{
    public class ArtistRepository : Repository<Artist>, IRepository<Artist>
    {
        public ArtistRepository(AlbumCollectionAPIcontext context) : base(context)
        {
        }

    //    private AlbumCollectionAPIcontext db;
    //    public ArtistRepository(AlbumCollectionAPIcontext otherDb)
    //    {
    //        this.db = otherDb;
    //    }

    //    public void Create(Artist obj)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public IEnumerable<Artist> GetAll()
    //    {
    //        return db.Artists;
    //    }

    //    public Artist GetById(int id)
    //    {
    //        return db.Artists.FirstOrDefault(x => x.Id == id);
    //    }
    }
}
