import { Telegraf, Markup } from 'telegraf';
import 'dotenv/config';

const token = process.env.VITE_TELEGRAM_BOT_TOKEN;
const webAppUrl = 'https://nikitos32.github.io/mini-app-horoscope/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Click start to launch the app',
    Markup.keyboard([Markup.button.webApp('Start', webAppUrl)])
  );
});

bot.launch();
