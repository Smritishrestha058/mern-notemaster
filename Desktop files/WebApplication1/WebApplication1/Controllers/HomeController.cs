// using System.Diagnostics;
// using Microsoft.AspNetCore.Mvc;
// using WebApplication1.Models;
// using System;
// using System.Data;
// using MySql.Data.MySqlClient;

// namespace WebApplication1.Controllers;

// public class HomeController : Controller
// {
//     private const string User = "root";
//     private const string Password = "";
//     private const string Database = "kct";
//     private const string TableName = "user";
//     private const string Server = "localhost";

//     private static readonly string ConnectionString = $"Server={Server};Database={Database};Uid={User}; Pwd={Password}; ";

//     // private readonly string? ConnectionString;
//     // public HomeController(IConfiguration configuration){
//     //     _connectionString = configuration.GetConnectionString("DefaultConnection") ?? "N?A";
//     // }
//     public IActionResult Index()
//     {
//         return View();
//     }

//     public IActionResult Privacy()
//     {
//         return View();
//     }

//     public IActionResult Contact() => View();
//     public IActionResult ViewUsers(){
//         var users = GetKycDetails();
//     return View(users);
//     }

//     [HttpPost]
//     public IActionResult UserDetail(IFormCollection form) {
//         var name = form["name"].ToString() ?? "N/A";
//         var gender = form["gender"].ToString() ?? "N/A";
//         var address = form["address"].ToString() ?? "N/A";
//         var program = form["program"].ToString() ?? "N/A";
//         var hobbies = form["hobbies"].ToString() ?? "N/A";

//         string clickedButton = form["action"].ToString() ?? "N/A";
//         Console.WriteLine($"Clicked button >> {clickedButton}");

//         if(clickedButton == "submit") {
//         var model = new UserModel {
//             Hobbies = [.. form["hobbies"]],
//             Name = form["name"].ToString() ?? "N/A",
//             Gender = form["gender"].ToString() ?? "N/A",
//             Address = form["address"].ToString() ?? "N/A",
//             Program = form["program"].ToString() ?? "N/A",
//         };
//         EnsureTableExists();
//         CreateUser(name, gender, address, program, hobbies);
//         // ReadUsers();
//         return View("UserDetail", model);
//         }
//         return View("Contact");

//     }

//     private static void EnsureTableExists()
//     {
//         using MySqlConnection conn = new(ConnectionString);

//         const string query = $@"CREATE TABLE IF NOT EXISTS kycdetails (
//             Id INT AUTO_INCREMENT PRIMARY KEY,
//             Name VARCHAR(100),
//             Gender VARCHAR(100),
//             Address VARCHAR(100),
//             Program VARCHAR(50),
//             Hobbies VARCHAR(100)
//         );";
//         using MySqlCommand cmd = new MySqlCommand(query, conn);
//         try
//         {
//             conn.Open();
//             cmd.ExecuteNonQuery();
//             Console.WriteLine("Table verified");
//         }
//         catch (MySqlException e)
//         {
//             Console.WriteLine("An error occured while ensuring table exists:" + e.Message);
//         }
//     }
//     private static void CreateUser(string name, string gender, string address, string program, string hobbies)
//     {
//         using MySqlConnection conn = new(ConnectionString);
//         const string query = $"INSERT INTO kycdetails (Name, Gender, Address, Program, Hobbies) VALUES (@Name, @Gender, @Address, @Program, @Hobbies);";

//         using MySqlCommand cmd = new MySqlCommand(query, conn);

//         cmd.Parameters.AddWithValue("@Name", name);
//         cmd.Parameters.AddWithValue("@Gender", gender);
//         cmd.Parameters.AddWithValue("@Address", address);
//         cmd.Parameters.AddWithValue("@Program", program);
//         cmd.Parameters.AddWithValue("@Hobbies", hobbies);

//         try
//         {
//             conn.Open();
//             int result = cmd.ExecuteNonQuery();

//             Console.WriteLine(result > 0 ? "User created successfully" : "User creation failed");
//         }
//         catch (MySqlException e)
//         {
//             Console.WriteLine("An error occured while creating user:" + e.Message);
//         }
//     }
//     private static List<KycDetail> GetKycDetails()
// {
//     var users = new List<KycDetail>();

//     using MySqlConnection conn = new(ConnectionString);
//     const string query = "SELECT * FROM kycdetails;";

//     try
//     {
//         conn.Open();
//         using MySqlCommand cmd = new(query, conn);
//         using MySqlDataReader reader = cmd.ExecuteReader();

//         while (reader.Read())
//         {
//             users.Add(new KycDetail
//             {
//                 Id = reader.GetInt32("Id"),
//                 Name = reader["Name"] as string ?? "N/A",
//                 Gender = reader["Gender"] as string ?? "N/A",
//                 Address = reader["Address"] as string ?? "N/A",
//                 Program = reader["Program"] as string ?? "N/A",
//                 Hobbies = reader["Hobbies"] as string ?? "N/A"
//             });
//         }
//     }
//     catch (MySqlException ex)
//     {
//         Console.WriteLine("An error occurred while reading users: " + ex.Message);
//     }

//     return users;
// }

// public IActionResult Delete(int id)
// {
//     using MySqlConnection conn = new(ConnectionString);
//     const string query = "DELETE FROM kycdetails WHERE Id = @Id";

//     try
//     {
//         conn.Open();
//         using MySqlCommand cmd = new(query, conn);
//         cmd.Parameters.AddWithValue("@Id", id);
//         cmd.ExecuteNonQuery();
//     }
//     catch (MySqlException ex)
//     {
//         Console.WriteLine("Error deleting user: " + ex.Message);
//     }

//     return RedirectToAction("ViewUsers");
// }
// [HttpGet]
// public IActionResult Edit(int id)
// {
//     using MySqlConnection conn = new(ConnectionString);
//     const string query = "SELECT * FROM kycdetails WHERE Id = @Id";
//     KycDetail user = null;

//     try
//     {
//         conn.Open();
//         using MySqlCommand cmd = new(query, conn);
//         cmd.Parameters.AddWithValue("@Id", id);
//         using MySqlDataReader reader = cmd.ExecuteReader();

//         if (reader.Read())
//         {
//             user = new KycDetail
//             {
//                 Id = reader.GetInt32("Id"),
//                 Name = reader["Name"] as string ?? "N/A",
//                 Gender = reader["Gender"] as string ?? "N/A",
//                 Address = reader["Address"] as string ?? "N/A",
//                 Program = reader["Program"] as string ?? "N/A",
//                 Hobbies = reader["Hobbies"] as string ?? "N/A"
//             };
//         }
//     }
//     catch (MySqlException ex)
//     {
//         Console.WriteLine("Error fetching user for edit: " + ex.Message);
//     }

//     return View(user);
// }
// [HttpPost]
// [ValidateAntiForgeryToken]
// public IActionResult Edit(IFormCollection form)
// {
//     int id = int.Parse(form["Id"]);
//     string name = form["name"];
//     string gender = form["gender"];
//     string address = form["address"];
//     string program = form["program"];
//     string hobbies = string.Join(",", form["hobbies"]); // ✅ combine selected checkboxes

//     using MySqlConnection conn = new(ConnectionString);
//     const string query = @"UPDATE kycdetails 
//                            SET Name = @Name, Gender = @Gender, Address = @Address, 
//                                Program = @Program, Hobbies = @Hobbies 
//                            WHERE Id = @Id";

//     try
//     {
//         conn.Open();
//         using MySqlCommand cmd = new(query, conn);
//         cmd.Parameters.AddWithValue("@Id", id);
//         cmd.Parameters.AddWithValue("@Name", name);
//         cmd.Parameters.AddWithValue("@Gender", gender);
//         cmd.Parameters.AddWithValue("@Address", address);
//         cmd.Parameters.AddWithValue("@Program", program);
//         cmd.Parameters.AddWithValue("@Hobbies", hobbies);
//         cmd.ExecuteNonQuery();
//     }
//     catch (MySqlException ex)
//     {
//         Console.WriteLine("Error updating user: " + ex.Message);
//     }

//     return RedirectToAction("ViewUsers");
// }

//     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
//     public IActionResult Error()
//     {
//         return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
//     }
// }
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System;
using System.Data;
using MySql.Data.MySqlClient;

namespace WebApplication1.Controllers;

public class HomeController : Controller
{
    // MySQL connection configuration
    private const string User = "root";
    private const string Password = "";
    private const string Database = "kct";
    private const string TableName = "user";
    private const string Server = "localhost";

    // Complete connection string for MySQL
    private static readonly string ConnectionString = $"Server={Server};Database={Database};Uid={User}; Pwd={Password}; ";

    // Loads home/index view
    public IActionResult Index()
    {
        return View();
    }

    // Loads privacy view
    public IActionResult Privacy()
    {
        return View();
    }

    // Loads contact form view
    public IActionResult Contact() => View();

    // Displays list of users (KYCs) from the database
    public IActionResult ViewUsers()
    {
        var users = GetKycDetails(); // Fetch all records from kycdetails
        return View(users);
    }

    // Handles submission of KYC form
    [HttpPost]
    public IActionResult UserDetail(IFormCollection form)
    {
        var name = form["name"].ToString() ?? "N/A";
        var gender = form["gender"].ToString() ?? "N/A";
        var address = form["address"].ToString() ?? "N/A";
        var program = form["program"].ToString() ?? "N/A";
        var hobbies = form["hobbies"].ToString() ?? "N/A";

        string clickedButton = form["action"].ToString() ?? "N/A";
        Console.WriteLine($"Clicked button >> {clickedButton}");

        // If user submitted the form
        if (clickedButton == "submit")
        {
            var model = new UserModel
            {
                Hobbies = [.. form["hobbies"]],
                Name = name,
                Gender = gender,
                Address = address,
                Program = program
            };

            EnsureTableExists();              // Ensure kycdetails table exists
            CreateUser(name, gender, address, program, hobbies);  // Insert user record

            return View("UserDetail", model); // Show confirmation view
        }

        return View("Contact"); // If no button match, return to contact form
    }

    // Creates the table if it doesn't exist
    private static void EnsureTableExists()
    {
        using MySqlConnection conn = new(ConnectionString);

        const string query = @"CREATE TABLE IF NOT EXISTS kycdetails (
            Id INT AUTO_INCREMENT PRIMARY KEY,
            Name VARCHAR(100),
            Gender VARCHAR(100),
            Address VARCHAR(100),
            Program VARCHAR(50),
            Hobbies VARCHAR(100)
        );";

        using MySqlCommand cmd = new MySqlCommand(query, conn);
        try
        {
            conn.Open();
            cmd.ExecuteNonQuery();
            Console.WriteLine("Table verified");
        }
        catch (MySqlException e)
        {
            Console.WriteLine("An error occurred while ensuring table exists: " + e.Message);
        }
    }

    // Inserts a new user into the kycdetails table
    private static void CreateUser(string name, string gender, string address, string program, string hobbies)
    {
        using MySqlConnection conn = new(ConnectionString);
        const string query = @"INSERT INTO kycdetails (Name, Gender, Address, Program, Hobbies)
                               VALUES (@Name, @Gender, @Address, @Program, @Hobbies);";

        using MySqlCommand cmd = new MySqlCommand(query, conn);
        cmd.Parameters.AddWithValue("@Name", name);
        cmd.Parameters.AddWithValue("@Gender", gender);
        cmd.Parameters.AddWithValue("@Address", address);
        cmd.Parameters.AddWithValue("@Program", program);
        cmd.Parameters.AddWithValue("@Hobbies", hobbies);

        try
        {
            conn.Open();
            int result = cmd.ExecuteNonQuery();
            Console.WriteLine(result > 0 ? "User created successfully" : "User creation failed");
        }
        catch (MySqlException e)
        {
            Console.WriteLine("An error occurred while creating user: " + e.Message);
        }
    }

    // Retrieves all user records from kycdetails
    private static List<KycDetail> GetKycDetails()
    {
        var users = new List<KycDetail>();

        using MySqlConnection conn = new(ConnectionString);
        const string query = "SELECT * FROM kycdetails;";

        try
        {
            conn.Open();
            using MySqlCommand cmd = new(query, conn);
            using MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                users.Add(new KycDetail
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader["Name"] as string ?? "N/A",
                    Gender = reader["Gender"] as string ?? "N/A",
                    Address = reader["Address"] as string ?? "N/A",
                    Program = reader["Program"] as string ?? "N/A",
                    Hobbies = reader["Hobbies"] as string ?? "N/A"
                });
            }
        }
        catch (MySqlException ex)
        {
            Console.WriteLine("An error occurred while reading users: " + ex.Message);
        }

        return users;
    }

    // Deletes a user record by ID
    public IActionResult Delete(int id)
    {
        using MySqlConnection conn = new(ConnectionString);
        const string query = "DELETE FROM kycdetails WHERE Id = @Id";

        try
        {
            conn.Open();
            using MySqlCommand cmd = new(query, conn);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();
        }
        catch (MySqlException ex)
        {
            Console.WriteLine("Error deleting user: " + ex.Message);
        }

        return RedirectToAction("ViewUsers"); // Refresh user list after delete
    }

    // Loads edit form with existing user data
    [HttpGet]
    public IActionResult Edit(int id)
    {
        using MySqlConnection conn = new(ConnectionString);
        const string query = "SELECT * FROM kycdetails WHERE Id = @Id";
        KycDetail user = null;

        try
        {
            conn.Open();
            using MySqlCommand cmd = new(query, conn);
            cmd.Parameters.AddWithValue("@Id", id);
            using MySqlDataReader reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                user = new KycDetail
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader["Name"] as string ?? "N/A",
                    Gender = reader["Gender"] as string ?? "N/A",
                    Address = reader["Address"] as string ?? "N/A",
                    Program = reader["Program"] as string ?? "N/A",
                    Hobbies = reader["Hobbies"] as string ?? "N/A"
                };
            }
        }
        catch (MySqlException ex)
        {
            Console.WriteLine("Error fetching user for edit: " + ex.Message);
        }

        return View(user);
    }

    // Updates the user record using form values
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Edit(IFormCollection form)
    {
        int id = int.Parse(form["Id"]);
        string name = form["name"];
        string gender = form["gender"];
        string address = form["address"];
        string program = form["program"];
        string hobbies = string.Join(",", form["hobbies"]); // Combine checkboxes into comma-separated string

        using MySqlConnection conn = new(ConnectionString);
        const string query = @"UPDATE kycdetails 
                               SET Name = @Name, Gender = @Gender, Address = @Address, 
                                   Program = @Program, Hobbies = @Hobbies 
                               WHERE Id = @Id";

        try
        {
            conn.Open();
            using MySqlCommand cmd = new(query, conn);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.Parameters.AddWithValue("@Name", name);
            cmd.Parameters.AddWithValue("@Gender", gender);
            cmd.Parameters.AddWithValue("@Address", address);
            cmd.Parameters.AddWithValue("@Program", program);
            cmd.Parameters.AddWithValue("@Hobbies", hobbies);
            cmd.ExecuteNonQuery();
        }
        catch (MySqlException ex)
        {
            Console.WriteLine("Error updating user: " + ex.Message);
        }

        return RedirectToAction("ViewUsers");
    }

    // Default error view handler
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
