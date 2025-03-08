---
sidebar_position: 1
---

# Settings and Launch

The *`Tools`* tab contains a menu of available tools on the left and a table with individual settings for each tool.  
The `Command` column contains the button to launch a specific tool (task). The `Status` column displays a progress indicator.

| ![Tools tab](/img/tutorial/tools_table.png) |
|:--:|
| *Tools tab and table* |

If required by the tool’s algorithm, a warning will appear during execution.  
This means you must not navigate between tabs, refresh the page, or take other actions until the task is complete.  
Otherwise, database integrity cannot be guaranteed.

| ![Warning message](/img/tutorial/tools_warning.png) |
|:--:|
| *Warning Message* |

Once the task is finished, a completion message will be displayed.

| ![Success message](/img/tutorial/tools_success.png) |
|:--:|
| *Success Message* |

Above the table, you will find the [Filter Block](/tools/filter-block.md).

:::danger
Before using any tool (except cache clearing), ALWAYS create a database backup.  
If the operation is interrupted before completion, data integrity may be compromised.
:::

:::tip
Click **Run Task** only after selecting **Groups** or **Attributes** in the filter block and configuring the tool’s settings!  
This saves time!  

Not all tools should be run repeatedly without restoring the database to its initial state.
:::
