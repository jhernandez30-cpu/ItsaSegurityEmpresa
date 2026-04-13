namespace ItsaSegurityPortfolio.Models;

public sealed class ProjectItem
{
    public string Title { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Url { get; set; } = "#";
    public List<string> Tags { get; set; } = [];
}
