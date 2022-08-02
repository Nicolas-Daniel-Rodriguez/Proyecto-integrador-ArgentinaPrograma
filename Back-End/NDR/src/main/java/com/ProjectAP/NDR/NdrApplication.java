package com.ProjectAP.NDR;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan ({"com.server", "com.server.config"})
public class NdrApplication {

	public static void main(String[] args) {
		SpringApplication.run(NdrApplication.class, args);
	}

}
