using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class SongSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Songs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Duration = table.Column<string>(nullable: true),
                    AlbumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Songs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Songs_Albums_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Albums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Songs",
                columns: new[] { "Id", "AlbumId", "Duration", "Title" },
                values: new object[,]
                {
                    { 1, 1, "4:03", "Roadhouse Blues" },
                    { 2, 1, "2:58", "Peace Frog" },
                    { 3, 2, "5:46", "Keep the Faith" },
                    { 4, 2, "6:00", "Bed of Roses" },
                    { 5, 3, "4:06", "Kool Thing" },
                    { 6, 3, "5:30", "Dirty Boots" },
                    { 7, 4, "5:34", "The Battle Evermore" },
                    { 8, 4, "7:08", "When the Levy Breaks" },
                    { 9, 5, "3:02", "Right Next Door to Hell" },
                    { 10, 5, "4:45", "Don't Cry" },
                    { 11, 6, "5:36", "Knockin' on Heaven's Door" },
                    { 12, 6, "5:43", "You Could Be Mine" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Songs_AlbumId",
                table: "Songs",
                column: "AlbumId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Songs");
        }
    }
}
