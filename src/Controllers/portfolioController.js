exports.create = async (req, res) => { 
    let statusValue= req.body.status;
    let dataValue= req.body.data;
    res.status(200).json({
        status:statusValue, 
        data: dataValue
    });
};

exports.read = async (req, res) => { 
    let statusValue= req.body.status;
    let dataValue= req.body.data;
    res.status(200).json({
        status:statusValue, 
        data: dataValue
    });
};

exports.delete = async (req, res) => { 
    let statusValue= req.body.status;
    let dataValue= req.body.data;
    res.status(200).json({
        status:statusValue, 
        data: dataValue
    });
};

exports.update = async (req, res) => { 
    let statusValue= req.body.status;
    let dataValue= req.body.data;
    res.status(200).json({
        status:statusValue, 
        data: dataValue
    });
};