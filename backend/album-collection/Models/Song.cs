using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using album_collection.Models;
using album_collection.Context;

namespace album_collection.Models
{
    public class Song
    {
        public string Title { get; set; }
        public string Duration { get; set; }
        public int Id { get; set; }

        [JsonIgnore]
        public virtual Album Album { get; set; }

        public int AlbumId { get; set; }
    }
}
