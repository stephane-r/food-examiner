const express = require('express');
const router = express.Router();
const checkGoogleRecaptcha = require('../middlewares/checkGoogleRecaptcha');
const Clarifai = require('clarifai');
const { sleep } = require('../utils');

const fakeRes = `{"status":{"code":10000,"description":"Ok"},"outputs":[{"id":"b66dc41841b9493ebacc67e3c11f1718","status":{"code":10000,"description":"Ok"},"created_at":"2019-02-22T01:24:49.633516420Z","model":{"id":"bd367be194cf45149e75f01d59f77ba7","name":"food-items-v1.0","created_at":"2016-09-17T22:18:59.955626Z","app_id":"main","output_info":{"message":"Show output_info with: GET /models/{model_id}/output_info","type":"concept","type_ext":"concept"},"model_version":{"id":"dfebc169854e429086aceb8368662641","created_at":"2016-09-17T22:18:59.955626Z","status":{"code":21100,"description":"Model trained successfully"},"train_stats":{}},"display_name":"Food"},"input":{"id":"f4255df88c2d47f8abfa1c7e037286c9","data":{"image":{"url":"https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}}},"data":{"concepts":[{"id":"ai_lVFxwhCj","name":"blueberry","value":0.98570824,"app_id":"main"},{"id":"ai_0wh0dJkQ","name":"sweet","value":0.94596934,"app_id":"main"},{"id":"ai_L2Kbb9g3","name":"pancake","value":0.927006,"app_id":"main"},{"id":"ai_skxkRfDl","name":"cake","value":0.8603754,"app_id":"main"},{"id":"ai_DlGsqbPZ","name":"chocolate","value":0.8055495,"app_id":"main"},{"id":"ai_MXDTmFwg","name":"pastry","value":0.74631643,"app_id":"main"},{"id":"ai_bkKjGgB0","name":"oatmeal","value":0.667536,"app_id":"main"},{"id":"ai_bq67BzDJ","name":"toast","value":0.65676296,"app_id":"main"},{"id":"ai_w68d36Ks","name":"bread","value":0.59832776,"app_id":"main"},{"id":"ai_G4CCK3Lh","name":"syrup","value":0.5803946,"app_id":"main"},{"id":"ai_PWmbd19r","name":"cream","value":0.5527373,"app_id":"main"},{"id":"ai_SZLLwK5W","name":"french toast","value":0.5504969,"app_id":"main"},{"id":"ai_GNdVB8DV","name":"banana","value":0.5492454,"app_id":"main"},{"id":"ai_Br1hm5jR","name":"butter","value":0.54787254,"app_id":"main"},{"id":"ai_321CbfRh","name":"cinnamon","value":0.5392041,"app_id":"main"},{"id":"ai_f1zKlGnc","name":"coffee","value":0.49250078,"app_id":"main"},{"id":"ai_JGRpzN0J","name":"maple syrup","value":0.46882355,"app_id":"main"},{"id":"ai_JQV7LmzG","name":"berry","value":0.46492127,"app_id":"main"},{"id":"ai_lSK1vzWN","name":"egg","value":0.44440958,"app_id":"main"},{"id":"ai_t7shxTxV","name":"corn","value":0.40715766,"app_id":"main"}]}}],"rawData":{"status":{"code":10000,"description":"Ok"},"outputs":[{"id":"b66dc41841b9493ebacc67e3c11f1718","status":{"code":10000,"description":"Ok"},"created_at":"2019-02-22T01:24:49.633516420Z","model":{"id":"bd367be194cf45149e75f01d59f77ba7","name":"food-items-v1.0","created_at":"2016-09-17T22:18:59.955626Z","app_id":"main","output_info":{"message":"Show output_info with: GET /models/{model_id}/output_info","type":"concept","type_ext":"concept"},"model_version":{"id":"dfebc169854e429086aceb8368662641","created_at":"2016-09-17T22:18:59.955626Z","status":{"code":21100,"description":"Model trained successfully"},"train_stats":{}},"display_name":"Food"},"input":{"id":"f4255df88c2d47f8abfa1c7e037286c9","data":{"image":{"url":"https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}}},"data":{"concepts":[{"id":"ai_lVFxwhCj","name":"blueberry","value":0.98570824,"app_id":"main"},{"id":"ai_0wh0dJkQ","name":"sweet","value":0.94596934,"app_id":"main"},{"id":"ai_L2Kbb9g3","name":"pancake","value":0.927006,"app_id":"main"},{"id":"ai_skxkRfDl","name":"cake","value":0.8603754,"app_id":"main"},{"id":"ai_DlGsqbPZ","name":"chocolate","value":0.8055495,"app_id":"main"},{"id":"ai_MXDTmFwg","name":"pastry","value":0.74631643,"app_id":"main"},{"id":"ai_bkKjGgB0","name":"oatmeal","value":0.667536,"app_id":"main"},{"id":"ai_bq67BzDJ","name":"toast","value":0.65676296,"app_id":"main"},{"id":"ai_w68d36Ks","name":"bread","value":0.59832776,"app_id":"main"},{"id":"ai_G4CCK3Lh","name":"syrup","value":0.5803946,"app_id":"main"},{"id":"ai_PWmbd19r","name":"cream","value":0.5527373,"app_id":"main"},{"id":"ai_SZLLwK5W","name":"french toast","value":0.5504969,"app_id":"main"},{"id":"ai_GNdVB8DV","name":"banana","value":0.5492454,"app_id":"main"},{"id":"ai_Br1hm5jR","name":"butter","value":0.54787254,"app_id":"main"},{"id":"ai_321CbfRh","name":"cinnamon","value":0.5392041,"app_id":"main"},{"id":"ai_f1zKlGnc","name":"coffee","value":0.49250078,"app_id":"main"},{"id":"ai_JGRpzN0J","name":"maple syrup","value":0.46882355,"app_id":"main"},{"id":"ai_JQV7LmzG","name":"berry","value":0.46492127,"app_id":"main"},{"id":"ai_lSK1vzWN","name":"egg","value":0.44440958,"app_id":"main"},{"id":"ai_t7shxTxV","name":"corn","value":0.40715766,"app_id":"main"}]}}]}}`

const app = new Clarifai.App({
 apiKey: process.env.CLARIFAI_API_KEY || 'CLARIFAI_API_KEY'
});

router.post('/',  async (req, res) => {
  
  // try {
    
  //   // For testing loading indicator
  //   await sleep(1000);

  //   // To prevent over using api keys
  //   res.send(fakeRes);

  // } catch (err) {
  //   res.status(500).json({ err: err });
  // }

  app.models.predict("bd367be194cf45149e75f01d59f77ba7", req.body.imageLink).then(
    function(response) {
      res.json(response);
    },
    function(err) {
      res.status(400).json({ err: err });
    }
  );

});

router.get('/env', (req, res) => {
  res.json({ test: 'test' })
  // res.json({ env: process.env.CLARIFAI_API_KEY });
})

module.exports = router;
