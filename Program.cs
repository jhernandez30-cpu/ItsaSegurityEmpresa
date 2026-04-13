using ItsaSegurityPortfolio;
using ItsaSegurityPortfolio.Models;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

builder.Services.AddSingleton(new PortfolioData());

await builder.Build().RunAsync();