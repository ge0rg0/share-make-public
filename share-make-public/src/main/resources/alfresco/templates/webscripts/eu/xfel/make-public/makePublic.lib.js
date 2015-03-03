<import resource="classpath:/alfresco/templates/webscripts/org/alfresco/slingshot/documentlibrary/action/action.lib.js">

/**
 * Grants or removes guest consumer permission to folder children
 * 
 * @param {type} node Folder to grant or remove permissions from
 * @param {type} grant true grants permission, false removes it
 * @return {undefined}
 */
function grantChildrenAccess(node, grant) {
    for each (n in node.children)
    {
        if (n.isDocument)
        {
            if (grant) {
                n.setPermission("Consumer", "guest");
            } else {
                n.removePermission("Consumer", "guest");
            }
        }
    }
}
