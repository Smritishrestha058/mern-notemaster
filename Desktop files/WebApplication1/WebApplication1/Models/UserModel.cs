namespace WebApplication1.Models;

//model = defines the structure 
public class UserModel {
    public required string Name { get; set; }
    public required string Gender { get; set; }
    public required string Address { get; set; }
    public required string Program { get; set; }
    public required List<string?> Hobbies { get; set; }
}