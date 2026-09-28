
const nomePortal = "Threat Intelligence Portal";   
let incidentesAtivos = 3;                           
let artefatosAnalisadosHoje = 47;
const iocsCatalogados = 1284;
const metaTriagemMinutos = 15;
let tempoMedioTriagemMinutos = 18;

const usuario = {
  nome: "Mariana Alves",
  idade: 27,
  cargo: "Analista de Segurança da Informação Júnior",
  cidade: "Recife-PE",
  empresa: "Empresa de médio porte",
  nivelAcesso: "Analista Júnior",
  ativo: true
};

function testarSistema() {
  console.log("=== Teste do sistema ===");
  console.log("Portal:", nomePortal);

  console.log("--- Usuário ---");
  console.log("Nome:", usuario.nome);
  console.log("Idade:", usuario.idade);
  console.log("Cargo:", usuario.cargo);
  console.log("Cidade:", usuario.cidade);
  console.log("Nível de acesso:", usuario.nivelAcesso);
  console.log("Usuário ativo?", usuario.ativo);

  console.log("--- Estatísticas ---");
  console.log("Incidentes ativos:", incidentesAtivos);
  console.log("Artefatos analisados hoje:", artefatosAnalisadosHoje);
  console.log("IoCs catalogados:", iocsCatalogados);
  console.log("Tempo médio de triagem:", tempoMedioTriagemMinutos + " min");

  if (tempoMedioTriagemMinutos > metaTriagemMinutos) {
    console.log("Atenção: tempo de triagem acima da meta de " + metaTriagemMinutos + " min.");
  } else {
    console.log("Ótimo: tempo de triagem dentro da meta.");
  }

  console.log("=== Fim do teste ===");
}


testarSistema();
