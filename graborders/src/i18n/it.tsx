import Withdraw from "src/view/pages/withdraw/Withdraw"

const it= {

  common: {
    nodata: "Nessun dato",
    review: "Recensione inviata. Grazie.",
          welcomeback: "Bentornato",
      Whatmovieareyouwatchingtoday: "Quale film stai guardando oggi?",
      trendingnow: "Di tendenza ora",
      trending: "Di tendenza",
      exlusiveoffers: "Offerte esclusive",
      nowshowing: "In programmazione",
      comingsoon: "Prossimamente",
      booktickets: "Prenota biglietti",
      notifyme: "Notificami",
      nomoviefound: "Nessun film trovato"
  },
  app: {
    title: "ODEON Cinemas - Visualizza programmazioni cinema e prenota biglietti film"
  },
  inputs: {
    username: `Nome utente`,
    password: 'password',
    phoneNumber: 'Numero di telefono',
    withdrawPassword: "Password di prelievo",
    confirmPassword: 'Conferma password',
    invitationcode: 'Codice invito',
    walletaddress: "Indirizzo wallet"
  },
  phrase: {
    important: "AVVISO IMPORTANTE DI SICUREZZA",
    warning1: "La tua frase di recupero segreta è la chiave del tuo wallet. Tienila al sicuro:",
    warning2: "Non condividere mai la tua frase con nessuno",
    warning3: "Non memorizzarla digitalmente (no screenshot, email, archiviazione cloud)",
    warning4: "Scrivila su carta e conservala in un luogo sicuro",
    warning5: "Chiunque abbia la tua frase può accedere e controllare il tuo wallet.",
    youresecretphrase: "La tua frase segreta",
    enteryourphrase: "Inserisci la tua frase di recupero segreta",
    phraseplaceholder: "Inserisci la tua frase segreta di 12, 18 o 24 parole separate da spazi...",
  },

  buttons: {
 
    copyphrase: "Copia frase",
    back: "Indietro",
    login: "Accedi",
    registerNow: "Registrati ora",
    signup: "Iscriviti",
    start: "Inizia",
    orders: "Ordini",
    submit: "Invia",
    backtohome: "Torna alla home",
    confirm: "Conferma",
    logout: "Esci",
    getstarted: "Inizia",

  },
  text: {
    welcome: "Benvenuto",
    discover: "Scopri offerte esclusive solo per te",
    signin: "Accedi",
    haveaccount: "Hai già un account",
    noaccount: "Non hai un account",
    showingnow: "In programmazione ora",
    comingsoon: "Prossimamente",
    termsconditions: "termini e condizioni",
    todayearning: "Guadagni di oggi",
    totalearning: "Guadagno totale",
    accountbalance: "Saldo conto",
    freezebalance: "Saldo bloccato",
    sumbitInformation: "Invia informazioni",
    order: "Ordine",
    pending: "In attesa",
    completed: "Completato",
    canceled: "Annullato",
    notransaction: "Non ci sono transazioni fino ad ora!",
    createdtime: "Ora di creazione",
    creationtime: "Ora di creazione",
    orderNumber: "Numero ordine",
    orderamount: "Importo ordine",
    income: "Reddito",
    buyerating: "Valutazioni acquirente",
    uid: "uid",
    promotioncode: "codice promozionale",
    walletamount: "Importo wallet",
    creditassesment: "Valutazione credito",
    myfinance: "Le mie finanze",
    withdraw: "Prelievo",
    validation: "Validazione",
    secret: "Frase segreta",
    mydetails: "I miei dettagli",
    profile: "Profilo",
    wallet: "Wallet",
    other: "Altro",
    customersupport: "Supporto clienti",
    transaction: "Transazione",
    taskshistory: "Cronologia attività",
    security: "Sicurezza",
    sponsor: `La nostra sicurezza è la nostra massima priorità e vogliamo assicurarci che tu
              sia protetto da potenziali rischi. Ti preghiamo di essere consapevole che
              non ti chiederemo mai di inviare denaro a un indirizzo sconosciuto. Prima
              di effettuare qualsiasi pagamento, ti chiediamo gentilmente di verificare
              prima i dettagli con noi.`,
  },
  errors: {
    backToHome: "Torna alla home",
    403: `Spiacente, non hai accesso a questa pagina`,
    404: "Spiacente, la pagina visitata non esiste",
    500: "Spiacente, il server segnala un errore",
    429: "Troppe richieste. Riprova più tardi.",
    forbidden: {
      message: "Vietato",
    },
    validation: {
      message: "Si è verificato un errore",
    },
    defaultErrorMessage: "Ops, si è verificato un errore",
  },

  withdraw: {
    withdrawrequest: "Richiesta di prelievo",
    withdrawamount: "Importo prelievo",
    Withdrawpassword: "Password prelievo",
    availablebalance: "Saldo disponibile",
    rules: "Descrizione regole",
    rule1: "il prelievo minimo è di $50",
    rule2: "Il pagamento verrà effettuato entro 24 ore dalla richiesta di prelievo",
    rule3: "l'invio incompleto dell'ordine giornaliero non consente il prelievo, tutti i prodotti devono essere inviati per il prelievo"
  },
  profile: {
    notprovided: "Non fornito",
    profile: "Profilo",
    fullname: "Nome completo",
    email: "Email",
    phonenumber: "Numero di telefono",
    country: "Paese",
    Invitationcode: "Codice invito"
  },
  wallet: {
    wallet: "Wallet",
    info: "informazioni metodo di prelievo",
    username: "Nome utente",
    walletname: 'Nome wallet',
    walletaddress: 'Indirizzo wallet',
    note: "Nota",
    notedesctiption: "Si prega di prestare attenzione quando si compilano queste informazioni."
  },

  cs: {
    cs: "Servizio clienti",
    note: "se hai domande o incontri problemi, chatta con il nostro team di supporto clienti online.",
    contactnow: "Contatta ora"
  },
  transaction: {
    transaction: "Transazione",
    all: "Tutti",
    withdraw: "Prelievo",
    deposit: "Deposito",
    notransaction: "Non ci sono transazioni fino ad ora!"
  },
  order: {
    order: "Ordine",
    completed: "Completato",
    pending: "In attesa",
    canceled: "Annullato",
    ordertime: "Orario ordine",
    ordernumber: "Numero ordine",
    total: "Totale importo ordine",
    commission: "Commissione",
    return: "Ritorno stimato", 
    nodataorder: "Nessun ordine disponibile."
  },

  security: {
    passwordsecurity: "Sicurezza della password",
    changepassword: "Cambia password",
    oldpassword: "Vecchia password",
    newpassword: "Nuova password",
    confirmpassword: "Conferma password",
    note: "Nota",
    notedesc: "Si prega di compilare queste informazioni con attenzione"
  },

  auth: {
    tenants: "Spazi di lavoro",
    singindesc: "Inserisci la tua email e password per accedere",
    signupdesc: "Inserisci la tua email e password per registrarti",
    profile: {
      title: "Profilo",
      success: "Profilo aggiornato con successo",
      vip: "Congratulazioni per l'abbonamento",
    },
    createAnAccount: "Crea un account",
    rememberMe: "Ricordami",
    forgotPassword: "Password dimenticata",
    signin: "Accedi",
    signup: "Registrati",
    signout: "Esci",
    alreadyHaveAnAccount: "Hai già un account? Accedi.",
    social: {
      errors: {
        "auth-invalid-provider": "Questa email è già registrata con un altro provider.",
        "auth-no-email": "L'email associata a questo account è privata o inesistente.",
      },
    },
    signinWithAnotherAccount: "Accedi con un altro account",
    emailUnverified: {
      message: `Per favore conferma la tua email a <strong>{0}</strong> per continuare.`,
      submit: `Reinvia verifica email`,
    },
    emptyPermissions: {
      message: `Non hai ancora permessi. Aspetta che l'amministratore ti conceda i privilegi.`,
    },
    passwordResetEmail: {
      message: "Invia email di reimpostazione password",
      error: `Email non riconosciuta`,
    },
    passwordReset: {
      message: "Reimposta password",
    },
    passwordChange: {
      title: "Cambia password",
      success: "Password cambiata con successo",
      mustMatch: "Le password devono corrispondere",
    },
    emailAddressVerificationEmail: {
      error: `Email non riconosciuta`,
    },
    verificationEmailSuccess: `Email di verifica inviata con successo`,
    passwordResetEmailSuccess: `Email di reimpostazione password inviata con successo`,
    passwordResetSuccess: `Password cambiata con successo`,
    verifyEmail: {
      success: "Email verificata con successo.",
      message: "Solo un momento, la tua email viene verificata...",
    },
  },

  tabbarmenue: {
    home: "Home",
    rate: "Valuta",
    profile: "Profilo"
  },

  validation: {
    mixed: {
      default: "${path} non è valido",
      required: "${path} è obbligatorio",
      oneOf: "${path} deve essere uno dei seguenti valori: ${values}",
      notOneOf: "${path} non deve essere uno dei seguenti valori: ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve essere un ${type}`;
      },
    },
    string: {
      length: "${path} deve essere esattamente ${length} caratteri",
      min: "${path} deve essere almeno ${min} caratteri",
      max: "${path} deve essere al massimo ${max} caratteri",
      matches: '${path} deve corrispondere a quanto segue: "${regex}"',
      email: "${path} deve essere un'email valida",
      url: "${path} deve essere un URL valido",
      trim: "${path} deve essere una stringa tagliata",
      lowercase: "${path} deve essere una stringa minuscola",
      uppercase: "${path} deve essere una stringa maiuscola",
      selected: "${path} deve essere selezionato",
    },
    number: {
      min: "${path} deve essere maggiore o uguale a ${min}",
      max: "${path} deve essere minore o uguale a ${max}",
      lessThan: "${path} deve essere inferiore a ${less}",
      moreThan: "${path} deve essere maggiore di ${more}",
      notEqual: "${path} deve essere diverso da ${notEqual}",
      positive: "${path} deve essere un numero positivo",
      negative: "${path} deve essere un numero negativo",
      integer: "${path} deve essere un numero intero",
    },
    date: {
      min: "${path} campo deve essere successivo a ${min}",
      max: "${path} campo deve essere precedente a ${max}",
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} campo non può avere chiavi non specificate nella forma dell'oggetto",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} è obbligatorio`
          : `${path} campo deve avere almeno ${min} elementi`,
      max: "${path} campo deve avere meno o uguale a ${max} elementi",
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: "Carica",
    image: "Devi caricare un'immagine",
    size: "Il file è troppo grande. La dimensione massima consentita è {0}",
    formats: `Formato non valido. Deve essere uno di: {0}.`,
  },

  entities: {
    transaction: {
      fields: {
        phase: "Fase è obbligatoria"
      }
    }
  }

}
export default it