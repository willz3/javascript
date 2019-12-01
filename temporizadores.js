const schedule = require('node-schedule')

/**
 *  *\/5 -> a cada X segundos. Caso seja em um segundo exato, é só tirar a barra e o asterisco
 *  * -> qualquer minuto
 *  12 -> hora
 *  * -> dia do mês
 *  * -> mês
 *  2 -> dia da semana. [0 = Domingo, 1 = Segunda, 2 = Terça ... 7 = Sábado]
 */
const tarefaUm = schedule.scheduleJob('*/5 * 15 25 7 *', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
})

/**
 * Timer do JavaScript que vai parar o Scheduler dentro de 20 segundos
 */
setTimeout(function() {
    tarefaUm.cancel()
    console.log('Cancelando tarefa 1!');
}, 20000)

/**
 * Definindo a regra de uma forma diferente para o scheduler
 */
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tarefaDois = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})
