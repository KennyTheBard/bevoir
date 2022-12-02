# Bevoir
Self-hosted project management app that shares data through Git repositories

## Directory structure

```
/<project-name>
|----/members
|    |----/<git-email>
|         |----/notifications
|              |----<notification-datetime>
|
|----/tasks
|    |----/<task-number>
|
|----/sprints
     |----/<sprint-number>
```

Number format should be something like 000018 to be able to easily sort alphabetically.