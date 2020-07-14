using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Album
    {
        public string Name { get; set; }
        public string ImageName { get; set; }
        public int Id { get; set; }
        public int ReleaseYear { get; set; }
        public string RecordLabel { get; set; }
        public string Genre { get; set; }

        public Album()
        {

        }

        public Album(string name, string imageName, int id, int releaseYear, string recordLabel, string genre)
        {
            this.Name = name;
            this.ImageName = imageName;
            this.Id = id;
            this.ReleaseYear = releaseYear;
            this.RecordLabel = recordLabel;
            this.Genre = genre;
        }
    }
}
