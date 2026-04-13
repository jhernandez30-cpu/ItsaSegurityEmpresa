namespace ItsaSegurityPortfolio.Models;

public sealed class PortfolioData
{
    public string SiteTitle => "ITSA Segurity | Innovación digital";
    public string MetaDescription => "Portafolio corporativo moderno en Blazor WebAssembly con enfoque en desarrollo web, software, ciberseguridad y rendimiento.";
    public string Brand => "ITSA Segurity";

    public string HeroBadge => "Innovación digital con propósito";
    public string HeroTitle => "Construimos el futuro digital de tu negocio";
    public string HeroSubtitle => "Desarrollo web, software, ciberseguridad y marketing digital con una presencia visual sólida, moderna y escalable.";
    public string PrimaryCta => "#contacto";
    public string SecondaryCta => "#proyectos";

    public List<SkillGroup> SkillGroups { get; } =
    [
        new()
        {
            Title = "Desarrollo Web",
            Items = ["Blazor WebAssembly", "ASP.NET Core", "Razor Components", "Bootstrap 5", "Responsive Design"]
        },
        new()
        {
            Title = "Software a medida",
            Items = ["C# 12+", "Arquitectura modular", "Servicios REST", "Escalabilidad", "Mantenibilidad"]
        },
        new()
        {
            Title = "Ciberseguridad",
            Items = ["OWASP", "Validación de entradas", "Buenas prácticas", "Hardening", "Confianza digital"]
        },
        new()
        {
            Title = "Experiencia digital",
            Items = ["UX/UI", "SEO técnico", "Narrativa visual", "Optimización", "Conversión"]
        }
    ];

    public List<ProjectItem> Projects { get; } =
    [
        new()
        {
            Title = "Portal Corporativo Premium",
            Category = "Desarrollo Web",
            Description = "Landing corporativa orientada a conversión, reputación y posicionamiento visual.",
            ImageUrl = "images/projects/project-1.svg",
            Url = "#",
            Tags = ["Blazor", "Bootstrap", "SEO"]
        },
        new()
        {
            Title = "Suite de Gestión Empresarial",
            Category = "Software a medida",
            Description = "Dashboard modular con arquitectura limpia, UI profesional y base escalable.",
            ImageUrl = "images/projects/project-2.svg",
            Url = "#",
            Tags = ["C#", ".NET", "Arquitectura"]
        },
        new()
        {
            Title = "Auditoría de Seguridad Digital",
            Category = "Ciberseguridad",
            Description = "Sitio orientado a confianza, autoridad técnica y presentación clara de servicios.",
            ImageUrl = "images/projects/project-3.svg",
            Url = "#",
            Tags = ["Security", "UX", "Performance"]
        }
    ];

    public List<ExperienceItem> Experience { get; } =
    [
        new()
        {
            Year = "2020",
            Title = "Inicio de la visión digital",
            Description = "Comienza la consolidación de una propuesta que une tecnología, seguridad y diseño."
        },
        new()
        {
            Year = "2022",
            Title = "Expansión de servicios",
            Description = "Se fortalecen las soluciones empresariales y el enfoque en ciberseguridad."
        },
        new()
        {
            Year = "2026",
            Title = "Consolidación de marca",
            Description = "Portafolio más maduro, con propuesta moderna y arquitectura mantenible."
        }
    ];

    public List<string> Certifications { get; } =
    [
        "ISO 27001",
        "OWASP",
        "AWS",
        "Microsoft",
        "PCI DSS"
    ];

    public string ContactTitle => "Conversemos sobre tu próximo proyecto";
    public string ContactDescription => "Cuéntanos tu necesidad y estructuramos una propuesta moderna, segura y preparada para crecer.";
}
