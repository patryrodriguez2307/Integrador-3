db.institutions.insertOne({
    name: "Anita Cupcakes",
    address: "Av. Dardo Rocha 123, Monte Grande, Argentina",
    phone: "+54 11152643323",
    email: "pedidos@anitacupcakes.com",
    logo: "AnitaCupcakesLogo.jpg",
    mission: {
        description: "Nuestra misión es crear momentos de alegría y celebración a través de la elaboración artesanal de cupcakes deliciosos y visualmente atractivos, brindando una experiencia dulce y memorable a cada cliente. Nos dedicamos a deleitar a nuestros clientes con cupcakes frescos y creativos, convirtiendo cada ocasión en un evento especial y lleno de dulzura. Nuestro objetivo es innovar constantemente en nuestros sabores y diseños de cupcakes para satisfacer los paladares más exigentes, asegurando una experiencia de sabor única y una alta satisfacción del cliente.",
        thumbnail: "mission.jpg",
    },
    vision: {
        description: "Aspiramos a ser el referente en el mundo de los cupcakes, transformando cada ocasión en un momento inolvidable a través de la excelencia y la creatividad. Nos impulsa un compromiso diario con la más alta calidad y una incansable búsqueda de la innovación, fusionando ingredientes selectos con nuevas tendencias para crear experiencias dulces que sorprendan y deleiten, inspirando a nuestros clientes a través de cada delicioso bocado";
        thumbnail: "vision.jpg",
    },
    values: {
        description: " Nuestros Valores se enfocan en: Calidad y Frescura: utilizando ingredientes de la más alta calidad para crear productos horneados excepcionales y llenos de sabor. Pasión y Artesanía: elaboando nuestros productos con la dedicación y el amor por la repostería, manifestados en técnicas tradicionales y un toque artesanal en cada detalle. Innovación:  con La búsqueda constante de nuevos sabores, combinaciones creativas y diseños que sorprendan y deleiten al paladar. Satisfacción del Cliente: El objetivo principal es deleitar a los clientes, superando sus expectativas con productos que satisfagan sus gustos más exigentes. Honestidad e Integridad: Manteniendo la coherencia entre lo que se ofrece y lo que se entrega, siempre siendo transparentes con los clientes. Responsabilidad: Actuando con un alto grado de responsabilidad hacia los clientes, colaboradores y el entorno.";
        thumbnail: "values.jpg",
    },
    createdAt: new Date(),
    updatedAt: new Date()
});