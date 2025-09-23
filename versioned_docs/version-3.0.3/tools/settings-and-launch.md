---
sidebar_position: 1
---

# Configuration and Launch

The *`Tools`* tab contains a tools menu on the left and a table with individual settings for each tool.  
The `Command` column features the button used to launch a given tool (task). While the task is in progress, the button changes to show `Loading status`.

Additional settings are located in the *`Settings`* column and vary depending on the selected task.

| ![Tools tab](/img/tutorial/en/tools_menu_en.png) |
|:--:|
| *Tools tab and table* |

If required by the tool's algorithm, a warning will appear while the task is running.  
This means you must not switch tabs, reload the page, etc., until the task completes.  
Otherwise, database integrity cannot be guaranteed.

| ![Warning message](/img/tutorial/en/tools_warning_en.png) |
|:--:|
| *Warning Message* |

Once the task finishes, a message will appear with the result.

| ![Success message](/img/tutorial/en/tools_success_en.png) |
|:--:|
| *Success Message* |

Above the table is the [Filter Block](/tools/filter-block.md).  
Below the table, a progress indicator appears while a task is running.

:::danger
Before using any tool except for cache clearing, ALWAYS create a backup of your database.  
If an operation is interrupted before completion, there is a high risk of data corruption.
:::

:::tip
Click the **Run Task** button only after selecting **Groups** or **Attributes** in the filter block and configuring the chosen tool!  
It saves time!  
Not all tools are meaningful to run repeatedly without restoring the initial database state.
:::
