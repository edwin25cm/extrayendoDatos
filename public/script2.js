

new gridjs.Grid({
    columns: [
        { id: "PersonaID", name: "IdPersona" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre"},
        { id: "DNI", name: "DNI" },
        { id: "Email", name: "email" },
        { id: "FechaNacimiento", name: "FechaNacimiento"},
        { id: "Operaciones", name: "Operaciones",
        
        formatter: (cell, row) => {
            const personaID = row.cells[0].data;
            return gridjs.html(`<a href="./modificardatos.html?parametro=${personaID}">a</a>`);
        }
    }
        ],
    
        sort: true,
        server: {
            url: "http://localhost:4000/api/personas",
            then: data => data.map(post => [post.PersonaID, post.Apellido, post.Nombre, post.DNI, post.Email, post.FechaNacimiento, "a"])
            },
            pagination: true,
            search: true,
            language: {
                "search": "buscar...",
                "pagination": {
                    "previous": "anterior",
                    "next": "siguiente",
                    "of": "de",
                    "results": "resultados",
                    "to": "a"
                    }
                    }
                }).render(document.getElementById("wrapper"));