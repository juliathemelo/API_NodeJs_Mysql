const express = require('express')
const AeroportoController = require('./controllers/AeroportoController')
const VooController = require('./controllers/VooController')
const TrechoController = require('./controllers/TrechovooController')
const TipoController = require('./controllers/TipoaeronaveController')
const AeroController = require('./controllers/AeronaveController')
const InstanciaController = require('./controllers/InstanciaController')
const PousarController = require('./controllers/PodepousarController')
const TarifaController = require('./controllers/TarifaController')
const ReservaController = require('./controllers/ReservaassentoController')
const routes = express.Router()

routes.get('/aeroporto', AeroportoController.consulta )
routes.post('/aeroporto', AeroportoController.create )
routes.put('/aeroporto/:codigo', AeroportoController.atualizar )
routes.delete('/aeroporto/:codigo', AeroportoController.delete)

routes.post('/voo', VooController.create)
routes.get('/voo', VooController.consulta)
routes.put('/voo/:numero', VooController.atualizar)
routes.delete('/voo/:numero', VooController.delete)

routes.post('/trecho', TrechoController.create)
routes.get('/trecho', TrechoController.consulta)
routes.put('/trecho/:numero', TrechoController.atualizar)
routes.delete('/trecho/:numero', TrechoController.delete)

routes.post('/tipo', TipoController.create)
routes.get('/tipo', TipoController.consulta)


routes.post('/aero', AeroController.create)
routes.get('/aero', AeroController.consulta)
routes.put('/aero/:tipo', AeroController.atualizar)
routes.delete('/aero/:tipo', AeroController.delete)

routes.post('/instancia', InstanciaController.create)
routes.get('/instancia', InstanciaController.consulta)
routes.put('/instancia/:numero', InstanciaController.atualizar)
routes.delete('/instancia/:numero', InstanciaController.delete)

routes.post('/pousar', PousarController.create)
routes.get('/pousar', PousarController.consulta)
routes.delete('/pousar/:codigo', PousarController.delete)

routes.post('/tarifa', TarifaController.create)
routes.get('/tarifa', TarifaController.consulta)
routes.put('/tarifa/:numero', TarifaController.atualizar)
routes.delete('/tarifa/:numero', TarifaController.delete)

routes.post('/reserva', ReservaController.create)
routes.get('/reserva', ReservaController.consulta)
routes.put('/reserva/:numero', ReservaController.atualizar)
routes.delete('/reserva/:numero', ReservaController.delete)

module.exports = routes