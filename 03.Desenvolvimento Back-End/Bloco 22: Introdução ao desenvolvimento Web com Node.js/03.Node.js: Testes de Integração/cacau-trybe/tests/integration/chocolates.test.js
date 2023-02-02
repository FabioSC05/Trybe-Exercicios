const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Usando o método GET em /chocolates', function () {
beforeEach(function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(function () {
  sinon.restore();
});
  it('Retorna a lista completa de chocolates!', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    
    const response = await chai
      .request(app)
      .get('/chocolates');

    expect(response.status).to.be.equals(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/total', function () {
beforeEach(function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(function () {
  sinon.restore();
});
  it('Retorna a quantidade total de chocolates', async function () {
    const response = await chai.request(app)
      .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});

describe('Usando o método GET em /chocolates/search', function () {
beforeEach(function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(function () {
  sinon.restore();
});
  it('Retorna os chocolates que contém "Mo" no nome', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ]);
  });

  it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});
