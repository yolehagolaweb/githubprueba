export default (request, context) => {
    return Response.json({
        ok: true,
        message: (new Date()).toISOString(),
    })
}