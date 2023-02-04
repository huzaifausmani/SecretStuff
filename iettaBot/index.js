import { createBot } from 'whatsapp-cloud-api';

(async () => {
    try {
        //This just a structure, need to complete this all
        const you = '';
        const yourtoken = '';
        const yourHomie = '';
        const webhookVerifyToken = '';

        const iettaBot = createBot(you, yourtoken);

        const sendingMessage = await iettaBot.sendMessage(yourHomie, 'Eyy oo wat up nigga\n_sent by iettaBot_');


    } catch (error) {
        console.log(error);
    }
})();