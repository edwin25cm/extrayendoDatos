

new gridjs.Grid({
    columns: [
        { id: "PersonaID", name: "PersonaID" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre" },
        { id: "DNI", name: "DNI" },
        { id: "Email", name: "Email" },
        { id: "FechaNacimiento", name: "FechaNacimiento" }
        ],
      
        sort: true,
        server: {
            url: "http://localhost:4000/api/datos",
            then: data => data.map(post => [post.PersonaID, post.Apellido, post.Nombre, post.DNI, post.Email, post.FechaNacimiento])
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