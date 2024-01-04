check:
	@echo "Checking the status of the Spring-boot app:"
	@ps aux | grep spring | grep -v grep | awk '{ print $$1, $$2, $$3, $$4, $$11 }'

start:
	@cd /home/zy035c/Utyuuzz/utyuublog/celestial && ./mvnw spring-boot:run -e

shutdown:
	@echo "-------Spring-boot application utyuublog shutting down-------"
	@pids=$$(ps aux | grep spring | grep -v grep | awk '{ print $$2 }'); \
	if [ -n "$$pids" ]; then \
        echo "Killing processes: $$pids"; \
        kill -9 $$pids; \
        echo "App shutdown complete."; \
	else \
		echo "No running processes found."; \
	fi