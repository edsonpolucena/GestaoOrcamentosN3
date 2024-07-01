const {addRenda} = require('../controllers/renda');
const RendaSchema = require('../model/RendaModel');
const httpMocks = require('node-mocks-http');

jest.mock('../model/RendaModel'); // Mock o modelo RendaSchema

describe('addRenda', () => {
    it('deve adicionar uma nova renda e retornar status 200', async () => {
        //simula uma requisição HTTP POST com dados ficticios para adicionar uma renda
        const mockReq = httpMocks.createRequest({
            method: 'POST',
            body: {
                title: 'Salário',
                amount: 2000,
                category: 'Salário',
                description: 'Pagamento mensal',
                date: new Date()
            }
        });
        const mockRes = httpMocks.createResponse();
        //simula o objeto de resposta HTTP onde esperamos receber a mensagem de sucesso apos adicionar a renda
        RendaSchema.mockImplementation(() => ({
            save: jest.fn().mockResolvedValueOnce({})
        }));

        await addRenda(mockReq, mockRes);
        //chama a funcao addRenda passando os objetos mockReq e mockRes
        const responseJson = mockRes._getJSONData();

        expect(mockRes.statusCode).toBe(200);
        //verifica se o status da resposta é 200
        expect(responseJson.message).toBe('Renda Adicionada');
        //verifica se a mensagem retornada é correta
    });
});

