const {addDespesa} = require('../controllers/despesa');
const DespesaSchema = require('../model/DespesaModel');
const httpMocks = require('node-mocks-http');

jest.mock('../model/DespesaModel'); // Mock o modelo DespesaSchema

describe('addDespesa', () => {
    it('deve adicionar uma nova despesa e retornar status 200', async () => {
        const mockReq = httpMocks.createRequest({
            method: 'POST',
            body: {
                title: 'Conta de Luz',
                amount: 150,
                category: 'Utilidades',
                description: 'Pagamento mensal da conta de luz',
                date: new Date()
            }
        });
        const mockRes = httpMocks.createResponse();

        // Mock do método save para simular a gravação no banco de dados
        DespesaSchema.mockImplementation(() => ({
            save: jest.fn().mockResolvedValueOnce({})
        }));

        await addDespesa(mockReq, mockRes);

        const responseJson = mockRes._getJSONData();

        expect(mockRes.statusCode).toBe(200);
        expect(responseJson.message).toBe('Despesa Adicionada');
    });
});
