const pal ={
    index:(req,res) => {
        res.render('index');
    },
    about:(req,res) => {
        res.render('about');
    },
    portfolio:(req,res) => {
        res.render('portfolio');
    },
    contact:(req,res) => {
        res.render('contact');
    },
    services:(req,res) => {
        res.render('services');
    }
};

module.exports = pal;
