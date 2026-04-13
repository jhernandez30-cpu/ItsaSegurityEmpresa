using System.ComponentModel.DataAnnotations;

namespace ItsaSegurityPortfolio.Models;

public sealed class ContactFormModel
{
    [Required(ErrorMessage = "El nombre es obligatorio.")]
    [StringLength(100, ErrorMessage = "Máximo 100 caracteres.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "El correo es obligatorio.")]
    [EmailAddress(ErrorMessage = "Correo no válido.")]
    public string Email { get; set; } = string.Empty;

    [StringLength(150, ErrorMessage = "Máximo 150 caracteres.")]
    public string Company { get; set; } = string.Empty;

    [Required(ErrorMessage = "El mensaje es obligatorio.")]
    [StringLength(1000, MinimumLength = 20, ErrorMessage = "El mensaje debe tener entre 20 y 1000 caracteres.")]
    public string Message { get; set; } = string.Empty;
}
