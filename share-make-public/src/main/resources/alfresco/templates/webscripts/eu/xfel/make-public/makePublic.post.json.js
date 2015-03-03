<import resource="classpath:/alfresco/templates/webscripts/eu/xfel/make-public/makePublic.lib.js">
/**
 * Makes document or folder and its child documents public by adding the guest user
 * as consumer.
 * 
 * @method POST
 */

/**
 * Entrypoint required by action.lib.js
 * 
 * @method runAction
 * @param p_params
 *            {object} Object literal containing files array
 * @return {object|null} object representation of action results
 */

function runAction(p_params) {
    var results = [];
    var nodeString = p_params.files[0];
    var nodeRef = utils.getNodeFromString(nodeString);

    var result = {
        action: "makePublicAction",
        success: true,
        added: false
    }

    logger.log("name " + nodeRef.name);

    if (grantGuestAccess(nodeRef))
        result.added = true;

    results.push(result);

    return results;
}

function grantGuestAccess(nodeRef) {
    var added = false;
    try {
        nodeRef.setPermission("Consumer", "guest");
        if (nodeRef.isContainer) {
            grantChildrenAccess(nodeRef, true);
        }
        added = true;
    } catch (e)
    {
        javascriptlogger.error(e);
    }
    return added;
}

/* Bootstrap action script */
main();