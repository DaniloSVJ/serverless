const request = require('supertest')
const app = require('../src/App')

descript ("Projects",()=>{
  it('should be able to add new projetct',async ()=>{
    const response = await request(app)
    .post('/projects')
    .send({
      title:"Novo Projeto",
      owner:"Diego"

    });

    expect(response.body).toEqual({
      title:"Novo Projeto",
      owner:"Diego"
    })
  })
    
    it('should be able to add new projetct',async ()=>{
        await request(app)
      .post('/projects')
      .send({
        title:"Novo Projeto",
        owner:"Diego"
  
      });

      const response = await request(app).get('projects')  

      expect(response.body).toEqual(
        expect.arrayContaining([
          {title: "Novo Projeto", owner: "Diego"}
        ])
      )
    })



  
})