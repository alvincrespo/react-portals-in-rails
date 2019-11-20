# React Portals + Rails

Modern UI development within a monolith environment.

## Purpose

To teach you how to leverage a modern frontend library to create seamless user experiences within a monolith environment using a traditional Rails setup.

## Installation

### Install ruby

```
rbenv install 2.6.4
```

Note: Not using [rbenv](https://github.com/rbenv/rbenv)? What are you doing?

### Install bundler

```
gem install bundler 2.0.2
```

### Install frontend deps

```
yarn
```

Note: Not using [yarn](https://yarnpkg.com/lang/en/)? What are you doing?

### Start PostgreSQL

```
pg_ctl -D /usr/local/var/postgres start
```

### Create your db

```
bundle exec rails db:create
```

### Migrate your db

```
bundle exec rails db:migrate
```

## Running the application

```
bundle exec rails s
```

w00t! Visit your app at [http://localhost:3000](http://localhost:3000) 🎉🎉🎉
