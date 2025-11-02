app.post('/admin/add-user', async (req,res)=>{
  const token = req.headers['x-admin-token'] || req.body.adminToken;
  if(!token || token !== process.env.ADMIN_TOKEN) return res.status(403).json({ok:false, msg:'Forbidden'});
  const { id, password } = req.body;
  ...
});
