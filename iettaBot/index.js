import { createBot } from 'whatsapp-cloud-api';
import config from './config.json' assert { type: "json" };

(async () => {
    try {
        //This just a structure, need to complete this all
        const port = 3000;
        const you = '106372709038686';
        const yourtoken = 'EABN0xF0imQ0BACRZBkFZBkQ48AP9RFaZCMKSmD9ygFZBPdiWNiDhrRZBO21aZAxmzyL0JDylAtLLPZCktwdIHGfFlInHAFMHZALNlbNY4L1EtQyKltaHjvrve6GSPiQoVR6sv1sgY3oaPZBhWnQC3KMXYGgsHQXgY31InZCLqfHj8EiVyQJ1rrM5sjLXodyayuJqwcu6PiUXjHDAZDZD';
        const yourHomie = '923347756188';
        const webhookVerifyToken = 'EABN0xF0imQ0BACRZBkFZBkQ48AP9RFaZCMKSmD9ygFZBPdiWNiDhrRZBO21aZAxmzyL0JDylAtLLPZCktwdIHGfFlInHAFMHZALNlbNY4L1EtQyKltaHjvrve6GSPiQoVR6sv1sgY3oaPZBhWnQC3KMXYGgsHQXgY31InZCLqfHj8EiVyQJ1rrM5sjLXodyayuJqwcu6PiUXjHDAZDZD';
        console.log('hello');
        const iettaBot = createBot(you, yourtoken);

        const sendingMessage = await iettaBot.sendMessage(yourHomie, 'Eyy oo wat up nigga\n_sent by iettaBot_');

        await iettaBot.startExpressServer({
            webhookVerifyToken,
            port,
        });

        iettaBot.on('message', async (msg) => {
            console.log(msg);
            if (msg.type == 'text') {
                await iettaBot.sendText(msg.from, 'I wanna talk, its important');
            }
            else if (msg.type == 'image') {
                await iettaBot.sendImage(mag.from, 'Stop sending me images, told you I wanna talk');
            }
        });
    } catch (error) {
        console.log(error);
    }
})();