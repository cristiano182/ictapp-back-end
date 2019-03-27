//instancia do MongoClient

//ADICIONAR VERSÃO 2.2.33 DO MONGODB

var MongoClient = require("mongodb").MongoClient;

//conexão com o banco de dados remoto exemplomlab
MongoClient.connect(
  "mongodb://stark182:stark182@ds054999.mlab.com:54999/ucs_unifesp",
  function(err, db) {
    if (!err) {
      console.log("Conectado");
    }

    //criação da collection Estudantes
    db.collection("files", function(err, collection) {
      //inserção de 4 estudantes na collection
      collection.insertMany([
        {
          name: "Algebra linear",
          info: []
        },

        {
          name: "Algebra linear computacional",
          info: []
        },

        {
          name: "Algebra linear II",
          info: []
        },

        {
          name: "Algoritmos e estruturas de dados I",
          info: []
        },

        {
          name: "Algoritmos e estruturas de dados II",
          info: []
        },

        {
          name: "Algoritmos em Bioinformatica",
          info: []
        },

        {
          name: "Analise Real I",
          info: []
        },

        {
          name: "Analise Real II",
          info: []
        },

        {
          name: "Analise de Sinais",
          info: []
        },

        {
          name: "Anatomia",
          info: []
        },

        {
          name: "Aplicacoes de robotica movel",
          info: []
        },

        {
          name: "Aprendizado de maquina e reconhecimento de padroes",
          info: []
        },

        {
          name: "Arquitetura e organizacao de computadores",
          info: []
        },

        {
          name: "Aspectos de implementacao de banco de dados",
          info: []
        },

        {
          name: "Avancos em engenharia biomedica",
          info: []
        },

        {
          name: "Banco de dados",
          info: []
        },

        {
          name: "Bioengenharia",
          info: []
        },

        {
          name: "Bioetica e biosseguranca",
          info: []
        },

        {
          name: "Bioinformatica Avancada",
          info: []
        },

        {
          name: "Biologia do desenvolvimento",
          info: []
        },

        {
          name: "Biologia Estrutural",
          info: []
        },

        {
          name: "Biologia geral",
          info: []
        },

        {
          name: "Biologia molecular da celula",
          info: []
        },

        {
          name: "Biologia molecular do gene",
          info: []
        },

        {
          name: "Biomateriais",
          info: []
        },

        {
          name: "Biomecanica",
          info: []
        },

        {
          name: "Bioquimica I",
          info: []
        },

        {
          name: "Bioquimica I",
          info: []
        },

        {
          name: "Bioquimica II",
          info: []
        },

        {
          name: "Bioquimica Analitica",
          info: []
        },

        {
          name: "Biossensores",
          info: []
        },

        {
          name: "Biotecnologia Ambiental I",
          info: []
        },

        {
          name: "Biotecnologia Ambiental II",
          info: []
        },

        {
          name: "Biotecnologia Animal",
          info: []
        },

        {
          name: "Biotecnologia Vegetal",
          info: []
        },

        {
          name: "Biotecnologia de Energias Renovaveis I",
          info: []
        },

        {
          name: "Biotecnologia de energias renovaveis II",
          info: []
        },

        {
          name: "Blendas Polimericas",
          info: []
        },

        {
          name: "Botanica e fisiologia vegetal",
          info: []
        },

        {
          name: "Calculo em uma variavel",
          info: []
        },

        {
          name: "Calculo em varias variaveis",
          info: []
        },

        {
          name: "Calculo numerico",
          info: []
        },

        {
          name: "Ceramicas refratarias",
          info: []
        },

        {
          name: "Ciencia e tecnologia dos materiais",
          info: []
        },

        {
          name: "Ciencia, tecnologia e sociedade",
          info: []
        },

        {
          name: "Ciencia, tecnologia, sociedade e ambiente",
          info: []
        },

        {
          name: "Circuitos digitais",
          info: []
        },

        {
          name: "Circuitos eletricos I",
          info: []
        },

        {
          name: "Circuitos eletricos II",
          info: []
        },

        {
          name: "Compiladores",
          info: []
        },

        {
          name: "Computacao grafica",
          info: []
        },

        {
          name: "Condicionamento Analogico de Sinais",
          info: []
        },

        {
          name: "Controle de sistemas dinamicos",
          info: []
        },

        {
          name: "Controle digital",
          info: []
        },

        {
          name: "Corrosao e degradacao de materiais",
          info: []
        },

        {
          name: "Cultura digital",
          info: []
        },

        {
          name:
            "Desenho Tecnico Assistido por Computador Desenho tecnico basico",
          info: []
        },

        {
          name: "Desenvolvimento de Games",
          info: []
        },

        {
          name: "Desenvolvimento Integrado de Produtos",
          info: []
        },

        {
          name: "Desenvolvimento de Novos Negocios em Engenharia Biomedica",
          info: []
        },

        {
          name: "Direitos humanos, multiculturalismo e C&T",
          info: []
        },

        {
          name: "Eletronica avancada",
          info: []
        },

        {
          name: "Ecologia Avancada",
          info: []
        },

        {
          name: "Econometria",
          info: []
        },

        {
          name: "Efeitos Biologicos das Radiacoes Ionizantes",
          info: []
        },

        {
          name: "Elementos de algebra",
          info: []
        },

        {
          name: "Empreendedorismo",
          info: []
        },

        {
          name: "Empreendedorismo em biotecnologia",
          info: []
        },

        {
          name: "Engenharia bioquimica I",
          info: []
        },

        {
          name: "Engenharia bioquimica II",
          info: []
        },

        {
          name: "Engenharia clinica hospitalar",
          info: []
        },

        {
          name: "Engenharia de produtos ceramicos",
          info: []
        },

        {
          name: "Engenharia de software",
          info: []
        },

        {
          name: "Engenharia medica aplicada",
          info: []
        },

        {
          name: "Engenharia Tecidual e Medicina Regenerativa",
          info: []
        },

        {
          name: "Ensaios de materiais",
          info: []
        },

        {
          name: "Equacoes diferenciais ordinarias",
          info: []
        },

        {
          name: "Equacoes diferenciais parciais",
          info: []
        },

        {
          name: "Espacos metricos",
          info: []
        },

        {
          name: "Estrutura e propriedades de polimeros",
          info: []
        },

        {
          name: "Farmacologia Molecular",
          info: []
        },

        {
          name: "Fenomenos de transporte",
          info: []
        },

        {
          name: "Fenomenos do continuo",
          info: []
        },

        {
          name: "Fenomenos do continuo experimental",
          info: []
        },

        {
          name: "Fenomenos eletromagneticos",
          info: []
        },

        {
          name: "Fenomenos eletromagneticos experimental",
          info: []
        },

        {
          name: "Fenomenos mecanicos",
          info: []
        },

        {
          name: "Fenomenos mecanicos experimental",
          info: []
        },

        {
          name: "Fisica geral",
          info: []
        },

        {
          name: "Fisica moderna",
          info: []
        },

        {
          name: "Fisiologia experimental",
          info: []
        },

        {
          name: "Fisiologia humana I",
          info: []
        },

        {
          name: "Fisiopatologia Cardiorrespiratoria",
          info: []
        },

        {
          name: "Fisiopatologia clinica dos sistemas humanos",
          info: []
        },

        {
          name: "Funcoes analiticas",
          info: []
        },

        {
          name: "Fundamentos de biologia moderna",
          info: []
        },

        {
          name: "Fundamentos de engenharia bioquimica",
          info: []
        },

        {
          name: "Fundamentos de matlab aplicado a engenharia",
          info: []
        },

        {
          name: "Fundamentos de mecanica celeste",
          info: []
        },

        {
          name: "Geometria analitica",
          info: []
        },

        {
          name: "Gestao da Inovacao",
          info: []
        },

        {
          name: "Gestao de projetos",
          info: []
        },

        {
          name: "Imagens biomedicas",
          info: []
        },

        {
          name: "Imunologia Aplicada",
          info: []
        },

        {
          name: "Imunologia Geral",
          info: []
        },

        {
          name: "Inferencia e analise de regressao",
          info: []
        },

        {
          name: "Inteligencia artificial",
          info: []
        },

        {
          name: "Interacao humano-computador",
          info: []
        },

        {
          name: "Introducao a analise funcional",
          info: []
        },

        {
          name: "Introducao a bioinformatica",
          info: []
        },

        {
          name: "Introducao a biologia de sistemas",
          info: []
        },

        {
          name: "Introducao a biotecnologia",
          info: []
        },

        {
          name: "Introducao a ecologia",
          info: []
        },

        {
          name: "Introducao a eletrotecnica",
          info: []
        },

        {
          name: "Introducao a engenharia biomedica",
          info: []
        },

        {
          name: "Introducao a engenharia de materiais",
          info: []
        },

        {
          name: "Introducao a engenharia financeira",
          info: []
        },

        {
          name: "Introducao a geometria diferencial",
          info: []
        },

        {
          name: "Introducao a nanotecnologia",
          info: []
        },

        {
          name: "Introducao a Neurociencia",
          info: []
        },

        {
          name: "Introducao a otica biomedica",
          info: []
        },

        {
          name: "Introducao a pesquisa operacional",
          info: []
        },

        {
          name: "Introducao as Redes Neurais Artificiais",
          info: []
        },

        {
          name: "Instrumentos biomedicos I",
          info: []
        },

        {
          name: "Instrumentos biomedicos II",
          info: []
        },

        {
          name: "Instrumentos Eletromedicos",
          info: []
        },

        {
          name: "Laboratorio de biologia molecular e celular",
          info: []
        },

        {
          name: "Laboratorio de bioquimica",
          info: []
        },

        {
          name: "Laboratorio de bioquimica analitica",
          info: []
        },

        {
          name: "Laboratorio de circuitos eletricos",
          info: []
        },

        {
          name: "Laboratorio de eletronica digital",
          info: []
        },

        {
          name: "Laboratorio de engenharia bioquimica",
          info: []
        },

        {
          name: "Laboratorio de matematica",
          info: []
        },

        {
          name: "Laboratorio de microbiologia",
          info: []
        },

        {
          name:
            "Laboratorio de sistemas computacionais: arquitetura e organizacao de computadores",
          info: []
        },

        {
          name: "Laboratorio de sistemas computacionais: circuitos digitais",
          info: []
        },

        {
          name: "Laboratorio de sistemas computacionais: compiladores",
          info: []
        },

        {
          name:
            "Laboratorio de sistemas computacionais: engenharia de sistemas",
          info: []
        },

        {
          name: "Laboratorio de sistemas computacionais: redes de computadores",
          info: []
        },

        {
          name: "Laboratorio de sistemas computacionais: sistemas operacionais",
          info: []
        },

        {
          name: "Laboratorio de usabilidade na web",
          info: []
        },

        {
          name: "Linguagens formais e automatos",
          info: []
        },

        {
          name: "Logica de programacao",
          info: []
        },

        {
          name: "Marketing Estrategico",
          info: []
        },

        {
          name: "Matematica discreta",
          info: []
        },

        {
          name: "Matematica geral",
          info: []
        },

        {
          name: "Materiais aeroespaciais",
          info: []
        },

        {
          name: "Materiais ceramicos",
          info: []
        },

        {
          name: "Materiais compositos",
          info: []
        },

        {
          name: "Materiais de construcao civil",
          info: []
        },

        {
          name: "Materiais eletricos",
          info: []
        },

        {
          name: "Materiais metalicos",
          info: []
        },

        {
          name: "Materiais polimericos",
          info: []
        },

        {
          name: "Materias-primas ceramicas",
          info: []
        },

        {
          name: "Mecanica geral",
          info: []
        },

        {
          name: "Metalurgia extrativa",
          info: []
        },

        {
          name: "Metalurgia fisica",
          info: []
        },

        {
          name: "Metalurgia mecanica",
          info: []
        },

        {
          name: "Metodologia da pesquisa e comunicacao cientifica",
          info: []
        },

        {
          name: "Metodos Avancados em Processamento de Imagens Biomedicas",
          info: []
        },

        {
          name: "Metodos Estatisticos Multivariados",
          info: []
        },

        {
          name: "Metodos Matematicos para a Engenharia",
          info: []
        },

        {
          name: "Metodos numericos para equacoes diferenciais",
          info: []
        },

        {
          name: "Microbiologia aplicada e industrial",
          info: []
        },

        {
          name: "Microbiologia geral",
          info: []
        },

        {
          name: "Microeconomia",
          info: []
        },

        {
          name: "Modelagem computacional",
          info: []
        },

        {
          name: "Modelagem de Dados",
          info: []
        },

        {
          name: "Modelagem Molecular",
          info: []
        },

        {
          name: "Modelos Animais",
          info: []
        },

        {
          name: "Multimidia",
          info: []
        },

        {
          name: "Otimizacao inteira",
          info: []
        },

        {
          name: "Otimizacao linear",
          info: []
        },

        {
          name: "Otimizacao nao linear",
          info: []
        },

        {
          name: "Paradigmas da programacao",
          info: []
        },

        {
          name: "Planejamento de Experimentos",
          info: []
        },

        {
          name: "Pratica em Projetos Extensionistas I",
          info: []
        },

        {
          name: "Praticas de extensao e divulgacao cientifica",
          info: []
        },

        {
          name: "Praticas em Projetos Extensionistas II",
          info: []
        },

        {
          name: "Probabilidade",
          info: []
        },

        {
          name: "Probabilidade e estatistica",
          info: []
        },

        {
          name: "Processamento de imagens",
          info: []
        },

        {
          name: "Processamento de materiais ceramicos",
          info: []
        },

        {
          name: "Processamento de materiais metalicos",
          info: []
        },

        {
          name: "Processamento de sinais",
          info: []
        },

        {
          name: "Processamento de termofixos e elastomeros",
          info: []
        },

        {
          name: "Processamento de termoplasticos",
          info: []
        },

        {
          name: "Programacao concorrente e distribuida",
          info: []
        },

        {
          name: "Programacao orientada a objetos",
          info: []
        },

        {
          name: "Programacao paralela e processamento de alto desempenho",
          info: []
        },

        {
          name: "Projeto e analise de algoritmos",
          info: []
        },

        {
          name: "Projeto orientado a objetos",
          info: []
        },

        {
          name: "Projetos em engenharia da computacao",
          info: []
        },

        {
          name: "Proteomica",
          info: []
        },

        {
          name: "Prototipagem e Manufatura Aditiva",
          info: []
        },

        {
          name: "Qualidade",
          info: []
        },

        {
          name: "Quimica analitica",
          info: []
        },

        {
          name: "Quimica geral",
          info: []
        },

        {
          name: "Quimica geral experimental",
          info: []
        },

        {
          name: "Quimica inorganica",
          info: []
        },

        {
          name: "Quimica Medicinal I",
          info: []
        },

        {
          name: "Quimica Medicinal II",
          info: []
        },

        {
          name: "Quimica organica",
          info: []
        },

        {
          name: "Quimica organica experimental",
          info: []
        },

        {
          name: "Radioterapia para Engenharia",
          info: []
        },

        {
          name: "Realidade virtual e aumentada",
          info: []
        },

        {
          name: "Reciclagem de materiais",
          info: []
        },

        {
          name: "Redes de computadores",
          info: []
        },

        {
          name: "Relacoes etnico-raciais e cultura afro-brasileira e indigena",
          info: []
        },

        {
          name: "Reologia dos materiais",
          info: []
        },

        {
          name: "Resistencia dos materiais",
          info: []
        },

        {
          name: "Resolucao de problemas via modelagem matematica",
          info: []
        },

        {
          name: "Seguranca computacional",
          info: []
        },

        {
          name: "Selecao de materiais",
          info: []
        },

        {
          name: "Seminarios interdisciplinares",
          info: []
        },

        {
          name: "Series e equacoes diferenciais ordinarias",
          info: []
        },

        {
          name: "Sintese de polimeros",
          info: []
        },

        {
          name: "Sistemas distribuidos",
          info: []
        },

        {
          name: "Sistemas embarcados",
          info: []
        },

        {
          name: "Sistemas mecanicos",
          info: []
        },

        {
          name: "Sistemas operacionais",
          info: []
        },

        {
          name: "Tecnicas experimentais",
          info: []
        },

        {
          name: "Tecnologia e meio ambiente",
          info: []
        },

        {
          name: "Tecnologia em tintas e vernizes",
          info: []
        },

        {
          name: "Tecnologia social: praxis e contra-hegemonia",
          info: []
        },

        {
          name: "Teoria dos grafos",
          info: []
        },

        {
          name: "Teoria dos números e criptografia",
          info: []
        },

        {
          name: "Teorias administrativas",
          info: []
        },

        {
          name: "Termodinamica dos solidos",
          info: []
        },

        {
          name: "Termodinamica quimica",
          info: []
        },

        {
          name: "Topicos em matematica computacional I",
          info: []
        },

        {
          name: "Topicos em Ciencia e Tecnologia III",
          info: []
        },

        {
          name: "Topicos em tecnologia da computacao I",
          info: []
        },

        {
          name: "Topicos em tecnologia da computacao II",
          info: []
        },

        {
          name: "Topicos em tecnologia da computacao III",
          info: []
        },

        {
          name: "Topicos em tecnologia da computacao IV",
          info: []
        },

        {
          name: "Topicos em Ressonancia Magnetica Nuclear",
          info: []
        },

        {
          name: "Topicos especiais em ciencia e engenharia de materiais II",
          info: []
        },

        {
          name: "Trajetorias da Inovacao",
          info: []
        },

        {
          name: "Transducao de grandezas biomedicas",
          info: []
        },

        {
          name: "Tratamentos termicos",
          info: []
        },

        {
          name: "Validacao e verificacao de software",
          info: []
        },

        {
          name: "Vidros, vitroceramicas e vidrados",
          info: []
        }
      ]);

      db.collection("files").count(function(err, count) {
        if (err) throw err;
        console.log("Total linhas inseridas: " + count);
      });
    });
  }
);
