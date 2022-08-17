// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const SUCCESS_CODE = 200;
    res.status(SUCCESS_CODE).json({name: 'John Doe'});
}

