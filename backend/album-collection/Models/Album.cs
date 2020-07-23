using Newtonsoft.Json;
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
        public virtual IEnumerable<Song> Songs { get; set; }


        [JsonIgnore]
        public virtual Artist Artist { get; set; }
        public int ArtistId { get; set; }

    }
}
