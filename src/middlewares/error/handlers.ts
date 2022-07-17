export function catchError(action: any) {
    return (req: any, res: any, next: any) => action(req, res).catch(next);
}

export function errorLogger(err: any, req: any, res: any, next: any) {
    if (err) {
        console.error(err);
        const status = err.status || 500;
        const error = { message: err.message };
        res.status(status);
        res.json({ status, error });
    }
}