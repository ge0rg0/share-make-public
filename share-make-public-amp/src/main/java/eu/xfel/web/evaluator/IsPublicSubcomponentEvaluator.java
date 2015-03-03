package eu.xfel.web.evaluator;

import org.alfresco.error.AlfrescoRuntimeException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.alfresco.web.evaluator.BaseEvaluator;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;

/**
 * Evaluates whether document or folder has guest access i.e. open to the
 * outside world
 *
 * @author Jorge Elizondo
 */
public class IsPublicSubcomponentEvaluator extends BaseEvaluator {

    Log logger = LogFactory.getLog(IsPublicSubcomponentEvaluator.class);

    @Override
    public boolean evaluate(JSONObject jsonObject) {
        try {
            JSONObject node = (JSONObject) jsonObject.get("node");
            if (node == null) {
                return false;
            } else {
                
                JSONObject permissions = (JSONObject) node.get("permissions");
                if (permissions != null) {
                    JSONArray roles = (JSONArray)permissions.get("roles");
                    for (Object ap : roles) {
                        if (ap.toString().toLowerCase().contains("allowed;guest")) {
                            return true;
                        }
                    }
                }

            }
        } catch (Exception err) {
            throw new AlfrescoRuntimeException("Failed to run action evaluator: " + err.getMessage());
        }
        return false;
    }
}
