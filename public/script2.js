

new gridjs.Grid({
    columns: [
        { id: "Iddia", name: "Iddia" },
        { id: "CodigoDia", name: "CodigoDia" },
        { id: "DescripcionDia", name: "DescripcionDia" }
        ],
      
        sort: true,
        server: {
            url: "http://localhost:4000/api/datos",
            then: data => data.map(post => [post.Iddia, post.CodigoDia, post.DescripcionDia])
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