//luxon for the date
var DateTime = luxon.DateTime;

const FORMATO_ORA = "dd/MM/yyyy HH:mm:ss";

const {createApp} = Vue;

createApp({
    data(){
        return{
            currentIndex: 0,
            newMessage: '',
            searchContact: '',
            showChat: false,
            msgOpt: {
                i: null,
                show: false
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    id: 1,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    id: 2,
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    id: 3,
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    id: 4,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    id: 5,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    id: 6,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    id: 7,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    id: 8,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ],
            icons:[
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128520;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#128558;',
                '&#128555;',
                '&#128557;',
                '&#129312;',
                '&#129313;',
                '&#127877;',
                '&#129409;',
                '&#128584;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#127808;',
                '&#127804;',
                '&#127829;',
                '&#9749;',
                '&#127847;',
            ],
            frasi:[
                "Ho ricevuto candele al minestrone per lavaggi a mano, così mi vestirò di rosso erba aspettando il coniglio dell'orsa polare in una notte di rugiada bollente.",
                "Il gatto del pane sgretola la muffa arrugginita che corre lungo le bottiglie del cane del muro nero come zaffiro.",
                "Oggi mentre il calamaio era vuoto di polpi, la lattuga venendo a sapere dall'oracolo di Delfi che la chitarra non produceva più carne in scatola, decise di prendere un Kart e farsi un giro in metropolitana.",
                "Le finestre sono piene di giardini, viene voglia di pescare.",
                "Non so cosa pensare della mia caffettiera sibilante che dal precipizio della mia azienda piange la regina del caffè mentre si diletta nel mio portatile facendo un barbatrucco, davvero sorprendente, che trasforma me in un audace amatore che al posto dei fiori regala colori.",
                "I coccodrilli balzarono fuori e menarono la commessa mentre la spiaggia si riempiva di moscerini e quindi fu tutto un fracasso di ciambelle zuccherate in maniera cavalleresca.",
                "Non saprei cosa cucinare perché il lavandino ha superato i novanta ieri sulla pentola di mio zio che ha un cappello molto veloce e si arrabbia sempre perché non mangia pezzi di carta.",
                "Mangiavo una pera sul dromedario di mia suocera quando un pianoforte bussò all'atrocità mendicante della stanza digitale.",
                "L'albero di aranci mi ha detto che il vento che gli gira per la testa stasera andrà a prendersi un caffè insieme al figlio del cuscino a forma di busta di latte che si trova sul mio letto",
                "E infine, in modo strabico, la cella portò un cucchiaio di minestra alla provetta veneziana del laboratorio.",
                "Luca mangia nell'albero ma si sveglia correndo sulla sedia.",
                "Il canto delle sirene dell'ambulanza spinse Ulisse a buttarsi giù, ma gli amici infermieri lo trattennero.",
                "Era più di un tavolo l'otaria, perché dovunque manca il madrileno tirerò a mandare il Lussemburgo mangiato dalle tarme.",
                "La zia della zanzara faceva la nipote degli olivi.",
            ]
        }     
    
    },
    computed: {
        filteredContacts(){
            return this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
                return name.includes(this.searchContact.toLowerCase());
            })
        }

    },
    methods: {
        chat(id){
            this.currentIndex = this.contacts.findIndex((item)=> id === item.id )
           
        },
        sendMessage(){
            if(!this.newMessage) return;
            const dat = new Date();
            let newDate = dat.toLocaleString('it-IT')
            const newSentMessage = {
                date: newDate,
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newSentMessage);
            this.newMessage = '';
            this.risposta();
        },
        risposta(){
            setTimeout(()=>{
                const dat = new Date();
            let newDate = dat.toLocaleString('it-IT');
             numberRand = Math.floor(Math.random() * this.frasi.length) ;
            const newSentMessage = {
                date: newDate,
                message: this.frasi[numberRand],
                status: 'received'
            }
            this.contacts[this.currentIndex].messages.push(newSentMessage);
            this.$nextTick(()=> {
                const msg =  this.$refs.msg[this.$refs.msg.length - 1 ];
                msg.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
            })
            }, 1000)
        },
       
    
       
       
}}).mount('#app')