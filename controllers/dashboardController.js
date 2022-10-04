exports.adminDashboard = (req,res) => {
    res.render('./admin/index' ,{
        layout: 'admin'
    })
}