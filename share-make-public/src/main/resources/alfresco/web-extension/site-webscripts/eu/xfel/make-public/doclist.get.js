/*
 * doclist
 *
 * Inputs:
 *  mandatory: nodeRef = parent space nodeRef
 *
 * Outputs: space - object containing documents to be listed publicly
 */

var nodeRef = page.url.args.nodeRef;
model.space = main(nodeRef);

function main(nodeRef)
{
    if (page.url.args["nodeRef"] == undefined)
    {
        // redirect to error page
        status.code = 400;
        status.message = "One or more parameters are missing";
        return;
    }
    /*
   var space = null;
   if (nodeRef != null) {
       try {
           logger.log("Connecting to server webscript...");
           var connector = remote.connect("share-proxy");
           space = connector.get("/eu/xfel/make-public/doclist?nodeRef=" + nodeRef);
       } catch (err) {
           logger.log("Failure to load document list "+err.message);
       }
       
   }
   return space;*/
}
